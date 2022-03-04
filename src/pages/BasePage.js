import { Suspense } from "react";
import Loading from "../components/common/Loading/Loading"

const BasePage = ({app_state}) => {
    if(app_state.loading === true){
        return (
            <Loading/>
        )
    }

    if(app_state.error !== null){
        return (
            <h1>ERROR {app_state.error}</h1>            
        )
    }

    return (
        <div className='App-fade-in'>
            {app_state.current_page}
        </div>        
    )
        
}

//TODO: Implement and use the suspend component
/*const BasePage = ({app_state}) => {
    return (
      <Suspense fallback={<Loading/>}>
        { !app_state.loading && app_state.error !== null
          ? <h1>ERROR {app_state.error}</h1>
          : (
            <div className='App-fade-in'>
              {app_state.current_page}
          </div>   
          )}
      </Suspense>
    );  
  }*/

export default BasePage