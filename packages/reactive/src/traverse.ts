import { ProxyRaw, RawNode } from './environment'
import { isObservable, isSupportObservable } from './externals'
import { INode, IVisitor } from './types'

const concat = (array: any[], target: any) => {
  const arr = []
  for (let i = 0; i < array.length; i++) {
    arr.push(array[i])
  }
  arr.push(target)
  return arr
}

export const buildTreeNode = ({
  target,
  value,
  key,
  traverse,
  shallow,
}: IVisitor) => {
  const raw = ProxyRaw.get(value) || value
  const parentRaw = ProxyRaw.get(target) || target
  const parentNode = RawNode.get(parentRaw)
  const currentNode = RawNode.get(raw)
  if (currentNode) return currentNode
  if (parentNode) {
    const node: INode = {
      path: concat(parentNode.path, key),
      parent: parentNode,
      observers: new Set(),
      deepObservers: new Set(),
      shallow: shallow || parentNode.shallow,
      traverse: traverse || parentNode.traverse,
    }
    RawNode.set(value, node)
    return node
  } else {
    const node: INode = {
      path: [],
      observers: new Set(),
      deepObservers: new Set(),
      shallow,
      traverse,
    }
    RawNode.set(value, node)
    return node
  }
}

export const traverseIn = (target: any, key: PropertyKey, value: any) => {
  if (isObservable(value)) return value
  const parent = ProxyRaw.get(target) || target
  const raw = ProxyRaw.get(value) || value
  const parentNode = RawNode.get(parent)
  const node = RawNode.get(raw)
  if (parentNode) {
    if (!isSupportObservable(value)) return value
    const path = parentNode.path.concat(key as any)
    const shallow = parentNode.shallow
    if (!node) {
      RawNode.set(raw, {
        path,
        parent: parentNode,
        observers: new Set(),
        deepObservers: new Set(),
        shallow: parentNode.shallow,
        traverse: parentNode.traverse,
      })
    }
    if (shallow) return value
    return parentNode.traverse({ target, key, value, path, shallow })
  }
  return value
}
