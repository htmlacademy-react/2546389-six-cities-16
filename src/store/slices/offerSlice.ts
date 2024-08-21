import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CitiesName, DEFAULT_SORT_VARIANT, SortVariants } from '../../const';
import { OFFERS } from '../../mocks/offers';
import { StateType } from '../../types/stateType';
import { OfferPreview } from '../../types/offer';

const OFFERS_SLICE_NAME = 'offers';

const initialState : StateType = {
  city: CitiesName.Paris,
  offers: OFFERS,
  sortVariant : DEFAULT_SORT_VARIANT,
};

export const offerSlice = createSlice({
  name: OFFERS_SLICE_NAME,
  initialState: initialState,
  reducers: {
    setCurrentCity(state, action:PayloadAction<CitiesName>){
      state.city = action.payload;
    },
    setOffers(state, action:PayloadAction<OfferPreview[]>) {
      state.offers = action.payload;
    },
    setSortOptions(state, action:PayloadAction<SortVariants>) {
      state.sortVariant = action.payload;
    },
  }
});

export const {setCurrentCity,setOffers,setSortOptions} = offerSlice.actions;
export default offerSlice.reducer;
