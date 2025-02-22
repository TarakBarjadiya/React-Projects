import { Stack, Button } from '@mui/material';

export const MuiButtons = () => {
  return (
    <Stack spacing={4}>
      <Stack color={'ButtonFace'} spacing={2} direction={'row'}>
        <Button variant="text" href="https:/google.com">
          Text Button
        </Button>
        <Button variant="contained">Contained Button</Button>
        <Button variant="outlined">Outlined Button</Button>
      </Stack>
      <Stack spacing={2} direction={'row'}>
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="text" color="info">
          Info
        </Button>
        <Button variant="text" color="success">
          Success
        </Button>
        <Button variant="text" color="warning">
          Warning
        </Button>
        <Button variant="text" color="error">
          Error
        </Button>
      </Stack>
      <Stack spacing={2} direction={'row'}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
      </Stack>
      <Stack spacing={2} direction={'row'}>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="info">
          Info
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
        <Button variant="outlined" color="warning">
          Warning
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>
      <Stack display={'block'} spacing={2} direction={'row'}>
        <Button variant='contained' size='small'>Small</Button>
        <Button variant='contained' size='medium'>Medium</Button>
        <Button variant='contained' size='large'>Large</Button>
      </Stack>
    </Stack>
  );
};
