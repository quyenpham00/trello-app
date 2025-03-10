/* eslint-disable indent */
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import Box from '@mui/material/Box'
import { useColorScheme } from '@mui/material/styles'

function ModeSelect() {
    const { mode, setMode } = useColorScheme()
    const handleChange = (event) => {
      setMode(event.target.value)
    }
    return (
      <FormControl size="small" sx={{ minWidth: 120 }}>
        <InputLabel id="demo-select-small-label">Mode</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={mode}
          label="Mode"
          onChange={handleChange}
        >
          <MenuItem value="light">
            <Box
              display="flex"
              alignItems="center"
              gap={1}
            >
              <LightModeIcon/> Light
            </Box>
          </MenuItem>
          <MenuItem value="dark">
            <Box
              display="flex"
              alignItems="center"
              gap={1}
            >
              <DarkModeOutlinedIcon/> Dark
            </Box>
          </MenuItem>
          <MenuItem value="system">
            <Box
              display="flex"
              alignItems="center"
              gap={1}
            >
              <SettingsBrightnessIcon/> System
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
    )
  }

export default ModeSelect