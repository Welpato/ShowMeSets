import { useEffect, useState } from "react"
import SetInfo from "../components/SetInfo/SetInfo"
import { BASE_APP_STATE } from "../utils/BaseAppState"
import { GET_CARDS_FROM_SET, GET_SETS_URL } from "../utils/constants"
import BasePage from "./BasePage"

function ShowSet(set_code) {
    const [AppState, setAppState] = useState(BASE_APP_STATE)

    useEffect(
        () => {     
          Promise.all([
            fetch(`${GET_SETS_URL}${set_code}`),
            fetch(`${GET_CARDS_FROM_SET}${set_code}`)
          ])
          .then(
            async(response) => {
              let setResponse = response[0]
              let cardsResponse = response[1]

              if(setResponse.ok !== true) {              
                setAppState({
                  loading:false, 
                  error:setResponse.error, 
                  current_page: null,
                })
                return
              }
              if(cardsResponse.ok !== true) {
                setAppState({
                  loading:false, 
                  error:cardsResponse.error, 
                  current_page: null,
                })
                return
              }
              let cardsData = await cardsResponse.json()
              let setData = await setResponse.json()
              setAppState({
                loading:false, 
                error:null, 
                current_page: (
                  <SetInfo 
                    set_data= {setData}
                    card_list= {cardsData.data}
                  />
                )
              })
            }
          )          
        }
      ,[setAppState])

    return (
        <BasePage app_state={AppState}/>
      )
}

export default ShowSet