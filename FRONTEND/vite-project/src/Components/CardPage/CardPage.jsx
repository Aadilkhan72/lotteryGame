import React, { useEffect, useState } from 'react'
import useLotteryStore from '../../Store/lotteryStore'
import CardModal from './CardModal'
import { useNavigate } from "react-router-dom"
import SnackBar from '../Snackbar/SnackBar.jsx'
import axios from 'axios'
import ResetModal from '../Reset/ResetModal.jsx'

function CardPage() {

  const {
    resetModal,
    lotteryName,
    cardModal,
    setCardModal,
    setAmtMulti,
    snackbarMsg,
    snackbarOpen,
    setSnackbarOpen,
    snackbarType
  } = useLotteryStore()

  const [data, setData] = useState([])
  const [isDisabled, setIsDisabled] = useState(false)
  const [showLoading, setShowLoading] = useState(true)

  const handleClose = () => {
    setSnackbarOpen(false)
  }

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/getCards/${lotteryName}`,
          { withCredentials: true }
        )
        setData(res.data)
      } catch (e) {
        setData([])
      } finally {
        setShowLoading(false)
      }
    }

    fetchCards()
  }, [lotteryName])

  return (
    <>
      {showLoading ? (
        <h1 className="text-center mt-5">Loading data...</h1>
      ) : (
        <>
          <div>
            <h1 className="text-center">
              <b>{lotteryName}</b>
            </h1>
            <h1 className="text-center">
              <b>CARDS</b>
            </h1>

            <table className="cardTable mt-2">
              <thead>
                <tr>
                  <th>Card</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td colSpan="2" style={{ textAlign: "center" }}>
                      No data to show
                    </td>
                  </tr>
                ) : (
                  data.map((num) => (
                    <tr key={num.number}>
                      <td>{num.number}</td>
                      <td>₹{num.amount}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="footer">
            <button
              className="btn btn-danger"
              onClick={() => {
                setCardModal(true)
                setAmtMulti(-1)
              }}
              disabled={isDisabled}
            >
              घटाए
            </button>

            <button
              className="btn btn-success"
              onClick={() => {
                setCardModal(true)
                setAmtMulti(1)
              }}
              disabled={isDisabled}
            >
              बढ़ाये
            </button>
          </div>

          {resetModal && <ResetModal />}
          {cardModal && (
            <CardModal disableParent={() => setIsDisabled(true)} />
          )}

          <SnackBar
            open={snackbarOpen}
            message={snackbarMsg}
            onClose={handleClose}
            snackbarType={snackbarType}
          />
        </>
      )}
    </>
  )
}

export default CardPage