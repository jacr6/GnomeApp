import { useState, useEffect, useContext } from 'react';
import { gnomeCom } from '../com/gnomeCom'
import {StoreContext} from '../context'

export default function useGnomeApi() {
  const context = useContext(StoreContext);
  const [isLoadingComplete, setLoadingComplete] = useState();
  const {gnomeData, setGnomeData} = context.gnomeData

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await gnomeCom()
         
        if (response&&response.state) {
          setGnomeData(response.data)
        }
        setLoadingComplete(true);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      }  
    }

    !isLoadingComplete && !gnomeData && fetchData();
  }, []);

  return {gnomeData, setGnomeData, isLoadingComplete };
}
