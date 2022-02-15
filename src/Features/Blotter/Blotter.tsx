import React, {useState, useCallback} from 'react'
import { DataGrid } from '../../components'

export const Blotter: React.FC = (): JSX.Element => {
const [showNoRowsOverlay, setShowNoRowsoverlay] = useState<boolean>(false)

const rowClickHandler = useCallback(
  () => {
 
  },
  [],
)


  return (
    <div>
       <DataGrid
       gridData={[{name: 'typescript'}]}
       colDef={[{field:'name'}]}
       showNoRowsOverlay={showNoRowsOverlay}
       rowClickHandler={rowClickHandler}
       size={{width: '100%', height:1000}}
       
       >

       </DataGrid>
    </div>
  )
}
