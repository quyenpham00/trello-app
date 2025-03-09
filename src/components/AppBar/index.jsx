
import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import SvgIcon from '@mui/icons-material/Apps'
import { Typography } from '@mui/material'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Started from './Menus/Started'
import Button from '@mui/material/Button'
import Templates from './Menus/Templates'
import TextField from '@mui/material/TextField'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'

function AppBar() {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }}/>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon component={TrelloIcon} inheritViewBox sx={{ color: 'primary.main' }} />
          <Typography sx={{ color: 'primary.main', fontSize: '1.2rem', fontWeight: 'bold' }}>Trello</Typography>
        </Box>
        <Workspaces />
        <Recent />
        <Started />
        <Templates />
        <Button variant="outlined">Create</Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField id="outlined-search" label="Search" type="search" size='small'/>
        <ModeSelect/>
        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot">
            <NotificationsNoneIcon/>
          </Badge>
        </Tooltip>
      </Box>
    </Box>
  )
}

export default AppBar