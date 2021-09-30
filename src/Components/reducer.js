
export const initialState = {
    questions : [{questionText:"Question", questionType:"radio", options:[{optionText:"Option 1"}], open:true,required:false}],
    questionType : "radio",
    doc_name : "Untitled form",
    
}

export const actionTypes = {
    SET_QUESTION : "SET_QUESTIONS",
    CHANGE_TYPE : "CHANGE_TYPE",
    SET_DOC_NAME : "SET_DOC_NAME",

}

function reducer(state=initialState,action) {
    switch (action.type) {
        case actionTypes.SET_QUESTION :
            return{
                ...state,questions:action.questions,
            };
        case actionTypes.CHANGE_TYPE :
            return{
                ...state,questionType:action.questionType,
            };
        case actionTypes.SET_DOC_NAME : 
        return {
            ...state,doc_name:action.doc_name,
        }
        default:
            return state;
    }
}

export default reducer
