import { create } from "zustand";
import { persist } from "zustand/middleware";

const useLotteryStore = create(
  persist(
    (set) => ({
      // ---------- Persistent State ----------
      lotteryName: "",
      userLoggedIn: false,   // ✅ new persistent field

      // ---------- UI State (Non-persistent) ----------
      cardNumber: 0,
      amount: 0,
      cardModal: false,
      snackbarMsg: "",
      snackbarOpen: false,
      snackbarType: "",
      jodiModal: false,
      jodi: 0,
      pattiModal: false,
      patti: 0,
      amtMulti: 1,
      resetModal:false,
    

      // ---------- Actions ----------
      setLotteryName: (name) => set({ lotteryName: name }),
      setUserLoggedIn: (val) => set({ userLoggedIn: val }), // ✅ new setter

      setCardNumber: (number) => set({ cardNumber: number }),
      setAmount: (amt) => set({ amount: amt }),
      setCardModal: (val) => set({ cardModal: val }),
      setSnackbarOpen: (val) => set({ snackbarOpen: val }),
      setSnackbarMsg: (msg) => set({ snackbarMsg: msg }),
      setSnackbartype: (val) => set({ snackbarType: val }), // fixed casing
      setJodiModal: (val) => set({ jodiModal: val }),
      setJodi: (number) => set({ jodi: number }),
      setPattiModal: (val) => set({ pattiModal: val }),
      setPatti: (number) => set({ patti: number }),
      setAmtMulti: (number) => set({ amtMulti: number }),
      setResetModal: (val) => set({ resetModal: val }),
      
    }),
    {
      name: "lottery-storage",
      partialize: (state) => ({
        lotteryName: state.lotteryName,
        userLoggedIn: state.userLoggedIn, // ✅ persist this too
      }),
    }
  )
);

export default useLotteryStore;