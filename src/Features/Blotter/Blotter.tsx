import React, {useState, useCallback} from 'react'
import { DataGrid } from '../../components'
import { useGetTradesQuery } from '../../services/tradesApi'

export const Blotter: React.FC = (): JSX.Element => {
const [showNoRowsOverlay, setShowNoRowsOverlay] = useState<boolean>(true)
const {data} = useGetTradesQuery(undefined, {pollingInterval : 3000})
const rowClickHandler = useCallback(
  () => {
 //implement
  },
  [],
)


  return (
    <div>
       <DataGrid
       gridData={[{ name: "ghost"}]}
       colDef={[{ field: "name"}]}
       showNoRowsOverlay={showNoRowsOverlay}
       rowClickHandler={rowClickHandler}
       size={{width: "200%", height:1000}}
       />
    </div>
  );
};
