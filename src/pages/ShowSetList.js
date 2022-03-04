import { useEffect, useState } from "react"
import SetList from "../components/SetList/SetList"
import { BASE_APP_STATE } from "../utils/BaseAppState"
import { GET_SETS_URL } from "../utils/constants"
import BasePage from "./BasePage"

function ShowSetList() {
    const [AppState, setAppState] = useState(BASE_APP_STATE)

    useEffect(
        () => {
          fetch(GET_SETS_URL)
          .then(
            async(response) => {
              if(response.ok !== true) {
                setAppState({
                  loading:false, 
                  error:response.error, 
                  current_page: null,
                })
                return
              }
              let setData = await response.json()
              setAppState({
                loading:false, 
                error:null, 
                current_page: (
                  <SetList set_list={setData.data}/>
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

export default ShowSetList