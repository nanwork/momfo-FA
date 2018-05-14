import * as types from './types'
//申请匹配成功后弹框
export const applySuccDialog = ({commit}, {dialogShow}) => {
  commit(types.UPDATE_APPLY_SUCCESS_DIALOG, {dialogShow})
}