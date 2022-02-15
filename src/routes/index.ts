import  { ConfirmationNumber, Home, TableView } from "@mui/icons-material";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export const MAIN = '/' as const;
export const BLOTTER = '/blotter' as const;
export const TRADE_TICKET = '/trade_ticket' as const;

type IconType = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
}
export type RouteType = {label: string, icon: IconType, path: typeof MAIN | typeof BLOTTER | typeof TRADE_TICKET}
export const routes: RouteType[] =  [
    {label: 'Home', path: MAIN, icon: Home},
    {label: 'Trade Blotter', path: BLOTTER, icon: TableView},
    {label: 'Trade Ticket', path: TRADE_TICKET, icon: ConfirmationNumber}
]

