import { createSlice } from "@reduxjs/toolkit";
import { GET_LIBRARY_DETAILS } from "../reducerConstants";
import { getStudentsMaterials, getTutorsMaterials } from "../api/LibraryService";



export const initialState = {
    studentMaterials: [],
    tutorsMaterials: [],
    studentMaterialsCount: 0,
    tutorsMaterialsCount: 0,
    isTutorLoading: false,
    isStudentLoading: false,
    isFetchedSlots: false,

};

const GetAllMaterialsSlice = createSlice({
    name: GET_LIBRARY_DETAILS,
    initialState,
    reducers: {

        setTutorLoading: (state, { payload }) => {
            state.isTutorLoading = payload

        },
        setStudentLoading: (state, { payload }) => {
            state.isStudentLoading = payload

        },

        reset: () => { },
    },
    extraReducers: (builder) => {
        builder.addCase(getTutorsMaterials.pending, (state) => {
            state.isTutorLoading = true;
        });
        builder.addCase(getTutorsMaterials.fulfilled, (state, { payload }) => {


            if (payload?.data?.statusCode === 200) {

                state.tutorsMaterials = payload?.data?.result
                state.tutorsMaterialsCount = payload?.data?.MaterialsCount

                state.isFetchedSlots = true
            } else {
                state.tutorsMaterials = []
                state.tutorsMaterialsCount = 0

                state.isFetchedSlots = true
            }

            state.isTutorLoading = false
        });
        builder.addCase(getTutorsMaterials.rejected, (state, { payload }) => {
            state.isTutorLoading = false;
        });
        builder.addCase(getStudentsMaterials.pending, (state) => {
            state.isStudentLoading = true;
        });
        builder.addCase(getStudentsMaterials.fulfilled, (state, { payload }) => {


            if (payload?.data?.statusCode === 200) {
                state.studentMaterials = payload?.data?.result
                state.studentMaterialsCount = payload?.data?.MaterialsCount
                state.isFetchedSlots = true
            } else {
                state.studentMaterials = []
                state.studentMaterialsCount = 0
                state.isFetchedSlots = true
            }

            state.isStudentLoading = false
        });
        builder.addCase(getStudentsMaterials.rejected, (state, { payload }) => {
            state.isStudentLoading = false;
        });
    },

});

export const GetAllMaterialsActions = GetAllMaterialsSlice.actions;
export default GetAllMaterialsSlice.reducer;