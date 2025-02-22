import { Typography } from '@mui/material';

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">This is subtitle 1</Typography>
      <Typography variant="subtitle2">This is subtitle 2</Typography>

      {/* body 1 is default for Typography */}
      <Typography>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat,
        labore.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
        provident!
      </Typography>
    </div>
  );
};
