import React, { useEffect, useState } from "react";


export const BaseApi = () => {
  useEffect(() => {
    // Define your baseURL and apiKey
    const apiKey = import.meta.env.VITE_API_KEY; 
    const baseId = import.meta.env.VITE_API_BASE_ID; 
    const table = import.meta.env.VITE_APP_AIRTABLE_TABLE_ID;
    const baseURL = `https://airtable.com/appgXtQByGQw5vxnL/tbl9MqQHf9mjQZA6Q`;
    //const base =new Api({ apiKey: 'pat4Rf1s2QfBrJ2aE.9076d6c8d2712e4f28eb6f21e8278465e2d7af6c86bf3715793c4319120ddb62' }).base('appgXtQByGQw5vxnL');
    // Fetch data from the API
    
    const fetchData = async () => {
      //try {
        const res = await fetch(baseURL, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        });
        //if(!res.ok) {
        //    console.error(`Error: ${res.status}`);
        //    return;
        //  }
          const fetchedEvent = await res.json();
          console.log('Fetched data:', fetchedEvent);
          };
        });


        // Call the fetchData function
        fetchData();
        // Check if the request was successful (status code 200)
       // if (!res.ok) {
       //   throw new Error(`Error: ${res.status}`);
    }

        // Parse the response data
      //  const fetchedEvent = await res.json();
      //  console.log('Fetched data:', fetchedEvent);
      //} catch (error) {
 
