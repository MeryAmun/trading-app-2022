import React, {useState, useCallback} from 'react'
import { DataGrid } from '../../components'
import { useGetTradesQuery } from '../../services/tradesApi'
import { tradeBlotterColDef } from './config';

export const Blotter: React.FC = (): JSX.Element => {
const [showNoRowsOverlay, setShowNoRowsOverlay] = useState<boolean>(false)
const {data} = useGetTradesQuery(undefined, {pollingInterval : 30000})
const rowClickHandler = useCallback(
  () => {
 //implement
  },
  [],
)
const data3 = [1,2,3,4,5]

  return (
    <div>
       <DataGrid
       gridData={data || []}
       colDef={tradeBlotterColDef}
       showNoRowsOverlay={showNoRowsOverlay}
       rowClickHandler={rowClickHandler}
       size={{width: "100%", height:1000}}
      ></DataGrid>
    </div>
  );
};
