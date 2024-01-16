import { useAppSelector } from 'src/redux_store'

export const useIsRequestSuccess = (sliceName: string, actionName: string) => {
  return useAppSelector((state) => state.apiSlice?.[sliceName]?.[actionName]?.status === 'fulfilled')
}

export const useIsRequestError = (sliceName: string, actionName: string) => {
  return useAppSelector((state) => state.apiSlice?.[sliceName]?.[actionName]?.status === 'rejected')
}

export const useIsRequestPending = (sliceName: string, actionName: string) => {
  return useAppSelector((state) => state.apiSlice?.[sliceName]?.[actionName]?.status === 'pending')
}
