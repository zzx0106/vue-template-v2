import { post } from '@/utils/http';

interface api_balance_tableBalanceSheet_getCompactList {
  affirmTimeEnd: string;
  affirmTimeStart: string;
  bigType: number;
  confirmStatus: string;
  confirmTimeEnd: string;
  confirmTimeStart: string;
  djType: string;
  entryTimeEnd: string;
  entryTimeStart: string;
  gotoTimeEnd: string;
  gotoTimeStart: string;
  houseDepartmentId: string;
  houseId: string;
  houseItemIds: string;
  houseJJRUserId: string;
  houseType: string;
  identityType: string;
  indentChengzuId: string;
  indentId: string;
  indentType: string;
  likeName: string;
  pageNo: string;
  pageSize: string;
  parenthouseId: string;
  paymentMethod: string;
  predictTimeEnd: string;
  predictTimeStrat: string;
  searchtype: string;
  sortFields: string;
  sortType: string;
  subDataType: string;
  type: string;
  typeId: string;
}
interface res_balance_tableBalanceSheet_getCompactList {
  pageNo: number;
  pageSize: number;
  totalPage: number;
  totalRecord: number;
  contractAuditStatus: string;
  list: {
    auditDepartment: string;
    payeeAccountType: {
      id: string;
      type: string;
      value: string;
      key: string;
      mark: string;
    };
    etId: string;
    type: number;
    parenthouseId: string;
    confirmDesc: string;
    printMan: string;
    confirmStatus: number;
    contractTn: string;
    id: string;
    beginTime: string;
    practicalMoney: string;
    confirmTime: string;
    badi: string;
    tableBankNo: string;
    isZUJIN: number;
    guestPoolsId: string;
    createDepartment: {
      parent: string;
      name: string;
      typeId: string;
      id: string;
      type: string;
    };
    housePoolsId: string;
    auditUser: {
      phone: string;
      nickName: string;
      id: string;
    };
    adoptDesc: string;
    isTodo: string;
    typeId: {
      id: string;
      type: string;
      value: string;
      key: string;
      mark: string;
    };
    payeeAccount: string;
    affirmDepartment: string;
    discountId: string;
    paymentAccount: string;
    ctId: {
      phone: string;
      nickName: string;
      id: string;
    };
    payeePhone: string;
    createIndentType: string;
    isQuitBill: number;
    repairId: string;
    tbsId: string;
    isBigCustomer: string;
    isCorrelation: number;
    indentId: string;
    payerName: string;
    smsNotifyList: {
      operateTime: string;
      operatorName: string;
    }[];
    seqId: string;
    jianMoney: string;
    address: string;
    payeeBankCard: string;
    adoptDepartmentId: string;
    payerPhone: string;
    ct: string;
    gotoTime: string;
    bigType: number;
    usedDeposit: string;
    endTime: string;
    payeeOpenBank: string;
    adoptUserId: string;
    paymentPhone: string;
    deleteWhy: string;
    isFirstPayment: number;
    adoptUserName: string;
    billNum: string;
    deleteThoroughlyWhy: string;
    mianMoney: string;
    indentType: number;
    paymentName: string;
    paymentDesc: string;
    affirmUser: {
      phone: string;
      nickName: string;
      id: string;
    };
    paymentAccountNo: string;
    contractNumber: string;
    bizPaymentType: string;
    indentChengzuId: string;
    et: string;
    name: string;
    tableOperateId: string;
    paymentMethod: {
      id: string;
      type: string;
      value: string;
      key: string;
      mark: string;
    };
    branchBankName: string;
    isAdditional: string;
    affirmTime: string;
    desc: string;
    no: string;
    note: string;
    loanType: number;
    paymentAccountType: {
      id: string;
      type: string;
      value: string;
      key: string;
      mark: string;
    };
    gcid: string;
    bankName: string;
    house: {
      quyuCName: string;
      fangZhuPhone: string;
      taizhang: string;
      isJizhong: number;
      fangNo: string;
      zhuti: string;
      louNo: string;
      buildingNo: string;
      men: string;
      ting: number;
      zujin: number;
      wei: number;
      id: string;
      tai: number;
      fangjianName: string;
      zhuangxiutypeId: string;
      roomNo: string;
      taiZhang: string;
      loucengA: number;
      isDaili: number;
      houseItemId: string;
      loucengB: number;
      chaoxiangId: string;
      parentId: string;
      chu: number;
      quyuBName: string;
      houseItemName: string;
      shi: number;
      chaoxiang: string;
      tese: string;
      houseRoomTypeId: string;
      floorNo: number;
      quyuAName: string;
      mianji: number;
      isShared: number;
      status: number;
    };
    payeeName: string;
    deleteThoroughlyDate: string;
    adoptDepartmentName: string;
    deleteDate: string;
    fitmentId: string;
    payeeDesc: string;
    printStatus: string;
    paymentRemark: string;
    isDelete: number;
    predictTime: string;
    paymentOpenBank: string;
    affirmDesc: string;
    money: string;
    paymentBankCard: string;
    affirmStatus: string;
    printTime: string;
  }[];
}
/**
 * 查询合同收支列表集合
 */
export const api_balance_tableBalanceSheet_getCompactList = (
  params: api_balance_tableBalanceSheet_getCompactList = {
    affirmTimeEnd: '',
    affirmTimeStart: '',
    bigType: 0,
    confirmStatus: '',
    confirmTimeEnd: '',
    confirmTimeStart: '',
    djType: '',
    entryTimeEnd: '',
    entryTimeStart: '',
    gotoTimeEnd: '',
    gotoTimeStart: '',
    houseDepartmentId: '',
    houseId: '',
    houseItemIds: '',
    houseJJRUserId: '',
    houseType: '',
    identityType: '',
    indentChengzuId: '',
    indentId: '',
    indentType: '',
    likeName: '',
    pageNo: '',
    pageSize: '',
    parenthouseId: '',
    paymentMethod: '',
    predictTimeEnd: '',
    predictTimeStrat: '',
    searchtype: '',
    sortFields: '',
    sortType: '',
    subDataType: '',
    type: '',
    typeId: '',
  }
): IRes<res_balance_tableBalanceSheet_getCompactList> => {
  return post('/balance/table_balance_sheet/get_compact_list', params);
};
interface api_balance_tableBalanceSheet_shouzhiTypeCount extends api_balance_tableBalanceSheet_getCompactList {}
interface res_balance_tableBalanceSheet_shouzhiTypeCount {
  overDueCount: number;
  shijiShouRu: number;
  shijiZhichu: number;
  shouzhiCount: number;
  totalMoney: string;
  yujiShouRu: number;
  yujiZhichu: number;
}
/**
 * 查询顶部筛选条件数据
 */
export const api_balance_tableBalanceSheet_shouzhiTypeCount = (
  params: api_balance_tableBalanceSheet_shouzhiTypeCount = {
    affirmTimeEnd: '',
    affirmTimeStart: '',
    bigType: 0,
    confirmStatus: '',
    confirmTimeEnd: '',
    confirmTimeStart: '',
    djType: '',
    entryTimeEnd: '',
    entryTimeStart: '',
    gotoTimeEnd: '',
    gotoTimeStart: '',
    houseDepartmentId: '',
    houseId: '',
    houseItemIds: '',
    houseJJRUserId: '',
    houseType: '',
    identityType: '',
    indentChengzuId: '',
    indentId: '',
    indentType: '',
    likeName: '',
    pageNo: '',
    pageSize: '',
    parenthouseId: '',
    paymentMethod: '',
    predictTimeEnd: '',
    predictTimeStrat: '',
    searchtype: '',
    sortFields: '',
    sortType: '',
    subDataType: '',
    type: '',
    typeId: '',
  }
): IRes<res_balance_tableBalanceSheet_shouzhiTypeCount> => {
  return post('/balance/table_balance_sheet/shouzhi_type_count', params);
};

interface api_balance_tableBalanceSheet_computeTotalMoney extends api_balance_tableBalanceSheet_getCompactList {}
interface res_balance_tableBalanceSheet_computeTotalMoney {
  totalMoney: string;
}
/**
 * 顶部总金额统计数据
 */
export const api_balance_tableBalanceSheet_computeTotalMoney = (
  params: api_balance_tableBalanceSheet_computeTotalMoney = {
    affirmTimeEnd: '',
    affirmTimeStart: '',
    bigType: 0,
    confirmStatus: '',
    confirmTimeEnd: '',
    confirmTimeStart: '',
    djType: '',
    entryTimeEnd: '',
    entryTimeStart: '',
    gotoTimeEnd: '',
    gotoTimeStart: '',
    houseDepartmentId: '',
    houseId: '',
    houseItemIds: '',
    houseJJRUserId: '',
    houseType: '',
    identityType: '',
    indentChengzuId: '',
    indentId: '',
    indentType: '',
    likeName: '',
    pageNo: '',
    pageSize: '',
    parenthouseId: '',
    paymentMethod: '',
    predictTimeEnd: '',
    predictTimeStrat: '',
    searchtype: '',
    sortFields: '',
    sortType: '',
    subDataType: '',
    type: '',
    typeId: '',
  }
): IRes<res_balance_tableBalanceSheet_computeTotalMoney> => {
  return post('/balance/table_balance_sheet/compute_total_money', params);
};

interface api_balance_tableBalanceSheet_getById {
  id: string;
  isGetHouseBefore?: string;
}
interface res_balance_tableBalanceSheet_getById {
  auditDepartment: string;
  payeeAccountType: {
    id: string;
    type: string;
    value: string;
    key: string;
    mark: string;
  };
  etId: string;
  orderId: string;
  type: number;
  parenthouseId: string;
  confirmDesc: string;
  printMan: string;
  confirmStatus: number;
  contractTn: string;
  id: string;
  beginTime: string;
  practicalMoney: string;
  confirmTime: string;
  badi: string;
  tableBankNo: string;
  isZUJIN: number;
  guestPoolsId: string;
  createDepartment: {
    parent: string;
    name: string;
    typeId: string;
    id: string;
    type: string;
  };
  sourceType: number;
  housePoolsId: string;
  isPos: number;
  auditUser: {
    phone: string;
    nickName: string;
    id: string;
  };
  adoptDesc: string;
  isTodo: string;
  typeId: {
    id: string;
    type: string;
    value: string;
    key: string;
    mark: string;
  };
  payeeAccount: string;
  affirmDepartment: string;
  discountId: string;
  paymentAccount: string;
  ctId: {
    phone: string;
    nickName: string;
    id: string;
  };
  payeePhone: string;
  createIndentType: string;
  isQuitBill: number;
  repairId: string;
  tbsId: string;
  isCorrelation: number;
  indentId: string;
  payerName: string;
  computeLateFeeFlag: string;
  seqId: string;
  jianMoney: string;
  address: string;
  payeeBankCard: string;
  adoptDepartmentId: string;
  payerPhone: string;
  ct: string;
  gotoTime: string;
  bigType: number;
  usedDeposit: string;
  endTime: string;
  payeeOpenBank: string;
  adoptUserId: string;
  paymentPhone: string;
  deleteWhy: string;
  isFirstPayment: number;
  adoptUserName: string;
  billNum: string;
  deleteThoroughlyWhy: string;
  mianMoney: string;
  indentType: number;
  paymentName: string;
  paymentDesc: string;
  affirmUser: {
    phone: string;
    nickName: string;
    id: string;
  };
  paymentAccountNo: string;
  contractNumber: string;
  bizPaymentType: string;
  indentChengzuId: string;
  et: string;
  name: string;
  tableOperateId: string;
  paymentMethod: {
    id: string;
    type: string;
    value: string;
    key: string;
    mark: string;
  };
  branchBankName: string;
  isAdditional: number;
  affirmTime: string;
  desc: string;
  no: string;
  note: string;
  loanType: number;
  paymentAccountType: {
    id: string;
    type: string;
    value: string;
    key: string;
    mark: string;
  };
  gcid: string;
  bankName: string;
  house: {
    quyuCName: string;
    fangZhuPhone: string;
    taizhang: string;
    isJizhong: number;
    fangNo: string;
    zhuti: string;
    louNo: string;
    buildingNo: string;
    men: string;
    ting: number;
    zujin: number;
    wei: number;
    id: string;
    tai: number;
    fangjianName: string;
    zhuangxiutypeId: string;
    roomNo: string;
    taiZhang: string;
    loucengA: number;
    isDaili: number;
    houseItemId: string;
    loucengB: number;
    chaoxiangId: string;
    parentId: string;
    chu: number;
    quyuBName: string;
    houseItemName: string;
    shi: number;
    chaoxiang: string;
    tese: string;
    houseRoomTypeId: string;
    floorNo: number;
    quyuAName: string;
    mianji: number;
    isShared: number;
    status: number;
  };
  payeeName: string;
  deleteThoroughlyDate: string;
  adoptDepartmentName: string;
  deleteDate: string;
  fitmentId: string;
  payeeDesc: string;
  printStatus: string;
  paymentRemark: string;
  isDelete: number;
  predictTime: string;
  paymentOpenBank: string;
  affirmDesc: string;
  money: string;
  paymentBankCard: string;
  affirmStatus: string;
  printTime: string;
}
/**
 * 查询收支信息
 */
export const api_balance_tableBalanceSheet_getById = (
  params: api_balance_tableBalanceSheet_getById = {
    id: '',
  }
): IRes<res_balance_tableBalanceSheet_getById> => {
  return post('/balance/table_balance_sheet/get_by_id', params);
};

interface api_balance_tableBalanceSheet_getListByTbsId {
  tbsId: string;
}
interface res_balance_tableBalanceSheet_getListByTbsId {
  list: {}[];
}
/**
 * 根据收支id获取操作列表
 */
export const api_balance_tableBalanceSheet_getListByTbsId = (
  params: api_balance_tableBalanceSheet_getListByTbsId = {
    tbsId: '',
  }
): IRes<res_balance_tableBalanceSheet_getListByTbsId> => {
  return post('/balance/balance_sheet_log/get_list_by_tbs_id', params);
};

interface api_balance_tableBalanceSheet_updateDescById {
  /**
   * 订单id
   */
  id: string;
  /**
   * 修改内容
   */
  desc: string;
}
interface res_balance_tableBalanceSheet_updateDescById {}
/**
 * 修改描述
 */
export const api_balance_tableBalanceSheet_updateDescById = (
  params: api_balance_tableBalanceSheet_updateDescById = {
    id: '',
    desc: '',
  }
): IRes<res_balance_tableBalanceSheet_updateDescById> => {
  return post('/balance/table_balance_sheet/update_desc_by_id', params);
};
interface api_balance_tableBalanceSheet_updateNoteById {
  /**
   * 订单id
   */
  id: string;
  /**
   * 修改内容
   */
  note: string;
}
interface res_balance_tableBalanceSheet_updateNoteById {}
/**
 * 修改备注
 */
export const api_balance_tableBalanceSheet_updateNoteById = (
  params: api_balance_tableBalanceSheet_updateNoteById = {
    id: '',
    note: '',
  }
): IRes<res_balance_tableBalanceSheet_updateNoteById> => {
  return post('/balance/table_balance_sheet/update_note_by_id', params);
};
interface api_balance_tableBalanceSheet_deleteById {
  /**
   * 订单id
   */
  id: string;
  /**
   * 删除原因
   */
  deleteWhy: string;
}
interface res_balance_tableBalanceSheet_deleteById {}
/**
 * 删除订单
 */
export const api_balance_tableBalanceSheet_deleteById = (
  params: api_balance_tableBalanceSheet_deleteById = {
    id: '',
    deleteWhy: '',
  }
): IRes<res_balance_tableBalanceSheet_deleteById> => {
  return post('/balance/table_balance_sheet/delete_by_id', params);
};

interface api_balance_tableBalanceSheet_updateById {
  beginTime: string;
  desc: string;
  endTime: string;
  id: string;
  money: string;
  predictTime: string;
}
interface res_balance_tableBalanceSheet_updateById {}
/**
 * 修改收支
 */
export const api_balance_tableBalanceSheet_updateById = (
  params: api_balance_tableBalanceSheet_updateById = {
    beginTime: '',
    desc: '',
    endTime: '',
    id: '',
    money: '',
    predictTime: '',
  }
): IRes<res_balance_tableBalanceSheet_updateById> => {
  return post('/balance/table_balance_sheet/update_by_id', params);
};

interface api_balance_tableBalanceSheet_getAuditRecordList {
  bizId: string;
}
interface res_balance_tableBalanceSheet_getAuditRecordList {
  list: {}[];
}
/**
 * 查询审核记录
 */
export const api_balance_tableBalanceSheet_getAuditRecordList = (
  params: api_balance_tableBalanceSheet_getAuditRecordList = {
    bizId: '',
  }
): IRes<res_balance_tableBalanceSheet_getAuditRecordList> => {
  return post('/balance/table_balance_sheet/get_audit_record_list', params);
};

interface api_balance_tableBalanceSheet_rateCalculation {
  paymenttype: string;
  totalMoney: string;
}
interface res_balance_tableBalanceSheet_rateCalculation {
  moneyAfterRate: number;
  rateValue: number;
}
/**
 * 获取费率信息
 */
export const api_balance_tableBalanceSheet_rateCalculation = (
  params: api_balance_tableBalanceSheet_rateCalculation = {
    paymenttype: '',
    totalMoney: '',
  }
): IRes<res_balance_tableBalanceSheet_rateCalculation> => {
  return post('/balance/table_balance_sheet/rate_calculation', params);
};

interface api_balance_tableBalanceSheet_batchAffirm {
  affirmList: {
    affirmDesc: string;
    billNum: string;
    gotoTime: string;
    id: string;
    payerName: string;
    payerPhone: string;
    paymentAccountNo: null | string;
    paymentMethod: string;
    paymentRemark: string;
    practicalMoney: string;
    predictTime: string;
    seqId: string;
    tableBankNo: string;
  }[];
  houseName: string;
  parenthouseId: string;
}
interface res_balance_tableBalanceSheet_batchAffirm {}
/**
 * 收款确认
 */
export const api_balance_tableBalanceSheet_batchAffirm = (
  params: api_balance_tableBalanceSheet_batchAffirm = {
    houseName: '',
    parenthouseId: '',
    affirmList: [
      {
        affirmDesc: '',
        billNum: '',
        gotoTime: '',
        id: '',
        payerName: '',
        payerPhone: '',
        paymentAccountNo: '',
        paymentMethod: '',
        paymentRemark: '',
        practicalMoney: '',
        predictTime: '',
        seqId: '',
        tableBankNo: '',
      },
    ],
  }
): IRes<res_balance_tableBalanceSheet_batchAffirm> => {
  return post('/balance/table_balance_sheet/batch_affirm', params);
};

interface api_balance_tableBalanceSheet_getZukeTbsByChengzuId {
  chengzuId: string;
  type: string;
}
interface res_balance_tableBalanceSheet_getZukeTbsByChengzuId {
  pageNo: number;
  pageSize: number;
  totalPage: number;
  totalRecord: number;
  list: {
    paymentPhone: string;
    auditDepartment: string;
    deleteWhy: string;
    isFirstPayment: number;
    payeeAccountType: {
      id: string;
      type: string;
      value: string;
      key: string;
      mark: string;
    };
    etId: string;
    adoptUserName: string;
    type: number;
    billNum: string;
    parenthouseId: string;
    confirmDesc: string;
    deleteThoroughlyWhy: string;
    mianMoney: string;
    indentType: number;
    printMan: string;
    confirmStatus: number;
    contractTn: string;
    id: string;
    beginTime: string;
    paymentName: string;
    paymentDesc: string;
    affirmUser: {
      phone: string;
      nickName: string;
      id: string;
    };
    practicalMoney: string;
    paymentAccountNo: string;
    contractNumber: string;
    confirmTime: string;
    bizPaymentType: string;
    badi: string;
    indentChengzuId: string;
    tableBankNo: string;
    et: string;
    guestPoolsId: string;
    createDepartment: {
      parent: string;
      name: string;
      typeId: string;
      id: string;
      type: string;
    };
    housePoolsId: string;
    name: string;
    auditUser: {
      phone: string;
      nickName: string;
      id: string;
    };
    adoptDesc: string;
    tableOperateId: string;
    paymentMethod: {
      id: string;
      type: string;
      value: string;
      key: string;
      mark: string;
    };
    isTodo: string;
    branchBankName: string;
    typeId: {
      id: string;
      type: string;
      value: string;
      key: string;
      mark: string;
    };
    isAdditional: string;
    payeeAccount: string;
    affirmDepartment: string;
    discountId: string;
    paymentAccount: string;
    affirmTime: string;
    desc: string;
    no: string;
    note: string;
    ctId: {
      phone: string;
      nickName: string;
      id: string;
    };
    payeePhone: string;
    createIndentType: string;
    loanType: number;
    isQuitBill: number;
    paymentAccountType: {
      id: string;
      type: string;
      value: string;
      key: string;
      mark: string;
    };
    gcid: string;
    repairId: string;
    bankName: string;
    house: {
      quyuCName: string;
      fangZhuPhone: string;
      taizhang: string;
      isJizhong: number;
      fangNo: string;
      zhuti: string;
      louNo: string;
      buildingNo: string;
      men: string;
      ting: number;
      zujin: number;
      wei: number;
      id: string;
      tai: number;
      fangjianName: string;
      zhuangxiutypeId: string;
      roomNo: string;
      taiZhang: string;
      loucengA: number;
      isDaili: number;
      houseItemId: string;
      loucengB: number;
      chaoxiangId: string;
      parentId: string;
      chu: number;
      quyuBName: string;
      houseItemName: string;
      shi: number;
      chaoxiang: string;
      tese: string;
      houseRoomTypeId: string;
      floorNo: number;
      quyuAName: string;
      mianji: number;
      isShared: number;
      status: number;
    };
    tbsId: string;
    payeeName: string;
    isCorrelation: number;
    indentId: string;
    payerName: string;
    deleteThoroughlyDate: string;
    adoptDepartmentName: string;
    seqId: string;
    deleteDate: string;
    fitmentId: string;
    jianMoney: string;
    address: string;
    payeeBankCard: string;
    payeeDesc: string;
    printStatus: string;
    adoptDepartmentId: string;
    paymentRemark: string;
    isDelete: number;
    predictTime: string;
    payerPhone: string;
    paymentOpenBank: string;
    ct: string;
    gotoTime: string;
    affirmDesc: string;
    money: string;
    paymentBankCard: string;
    affirmStatus: string;
    bigType: number;
    usedDeposit: string;
    endTime: string;
    payeeOpenBank: string;
    adoptUserId: string;
    printTime: string;
  }[];
}
/**
 * 按照承租合同查找收支
 */
export const api_balance_tableBalanceSheet_getZukeTbsByChengzuId = (
  params: api_balance_tableBalanceSheet_getZukeTbsByChengzuId = {
    chengzuId: '',
    type: '',
  }
): IRes<res_balance_tableBalanceSheet_getZukeTbsByChengzuId> => {
  return post('/balance/table_balance_sheet/get_zuke_tbs_by_chengzu_id', params);
};

interface api_balance_tableBalanceSheet_getCompactListNew {
  indentChengzuId: string;
  indentType: string;
  pageNo: string;
  pageSize: string;
}
interface res_balance_tableBalanceSheet_getCompactListNew {
  contractAuditStatus: string;
  list: {}[];
  pageNo: number;
  pageSize: number;
  totalPage: number;
  totalRecord: number;
}

/**
 * 展示账单聚合列表数据
 */
export const api_balance_tableBalanceSheet_getCompactListNew = (
  params: api_balance_tableBalanceSheet_getCompactListNew = {
    indentChengzuId: '',
    indentType: '',
    pageNo: '',
    pageSize: '',
  }
): IRes<res_balance_tableBalanceSheet_getCompactListNew> => {
  return post('/balance/table_balance_sheet/get_compact_list_new', params);
};

interface api_balance_tableBalanceSheet_listBalanceByChengzuIdAndFeeType {
  chengzuId: string;
  feeType: string;
  zukeInfo: string;
}
interface res_balance_tableBalanceSheet_listBalanceByChengzuIdAndFeeType {}
/**
 * 定向抵扣券账单查询
 */
export const api_balance_tableBalanceSheet_listBalanceByChengzuIdAndFeeType = (
  param: api_balance_tableBalanceSheet_listBalanceByChengzuIdAndFeeType = {
    chengzuId: '',
    feeType: '',
    zukeInfo: '',
  }
): IRes<res_balance_tableBalanceSheet_listBalanceByChengzuIdAndFeeType> => {
  return post('/balance/table_balance_sheet/listBalanceByChengzuIdAndFeeType', param);
};

interface api_balance_tableBalanceSheet_get {
  /**
   * 订单id
   */
  id: string;
}
interface res_balance_tableBalanceSheet_get {}
/**
 * 获取审批信息
 */
export const api_balance_tableBalanceSheet_get = (
  params: api_balance_tableBalanceSheet_get = {
    id: '',
  }
): IRes<res_balance_tableBalanceSheet_get> => {
  return post('/balance/table_balance_sheet/get', params);
};

interface api_balance_tableBalanceSheet_balanceSheetAudit {
  confirmDesc: string;
  confirmStatus: string;
  id: string;
}
interface res_balance_tableBalanceSheet_balanceSheetAudit {}
/**
 * 驳回审批
 */
export const api_balance_tableBalanceSheet_balanceSheetAudit = (
  params: api_balance_tableBalanceSheet_balanceSheetAudit = {
    confirmDesc: '',
    confirmStatus: '',
    id: '',
  }
): IRes<res_balance_tableBalanceSheet_balanceSheetAudit> => {
  return post('/balance/table_balance_sheet/balance_sheet_audit', params);
};

interface api_balance_tableBalanceSheet_saveChengzusBalanceSheet {
  isRetire: String;
  shouFuTime: String;
  type: String;
  chengzuIds: String[];
  balanceSheetList: {
    beginTime: String;
    endTime: String;
    id: String;
    indentType: String;
    money: String;
    paymentMethod: String;
    tableBankNo: String;
    typeId: String;
  }[];
}
interface res_balance_tableBalanceSheet_saveChengzusBalanceSheet {}
/**
 * 申请添加收支
 */
export const api_balance_tableBalanceSheet_saveChengzusBalanceSheet = (
  params: api_balance_tableBalanceSheet_saveChengzusBalanceSheet = {
    isRetire: '',
    shouFuTime: '',
    type: '',
    chengzuIds: [''],
    balanceSheetList: [{ beginTime: '', endTime: '', id: '', indentType: '', money: '', paymentMethod: '', tableBankNo: '', typeId: '' }],
  }
): IRes<res_balance_tableBalanceSheet_saveChengzusBalanceSheet> => {
  return post('/balance/table_balance_sheet/save_chengzus_balance_sheet', params);
};

interface api_balance_tableBalanceSheet_getListByIdsNew {
  confirmDesc: string;
  confirmStatus: string;
  id: string;
}
interface res_balance_tableBalanceSheet_getListByIdsNew {}
/**
 * 驳回审批
 */
export const api_balance_tableBalanceSheet_getListByIdsNew = (
  params: api_balance_tableBalanceSheet_getListByIdsNew = {
    confirmDesc: '',
    confirmStatus: '',
    id: '',
  }
): IRes<res_balance_tableBalanceSheet_getListByIdsNew> => {
  return post('/balance/table_balance_sheet/get_List_by_ids_new', params);
};

interface api_balance_tableBalanceSheet_getBalanceAff {}
interface res_balance_tableBalanceSheet_getBalanceAff {}
/**
 * 首付款 -----线上收款
 */
export const api_balance_tableBalanceSheet_getBalanceAff = (
  params: api_balance_tableBalanceSheet_getBalanceAff = {
    confirmDesc: '',
    confirmStatus: '',
    id: '',
  }
): IRes<res_balance_tableBalanceSheet_getBalanceAff> => {
  return post('/balance/table_balance_sheet/get_balance_aff', params);
};
