import Button from '@mui/material/Button';

export default function ButtonClick({props}: {props: any}) {
  return (
    <Button variant="contained" onClick={props.clickCounter} disabled={props.isLoading} color='warning'>
      Кликнуть
    </Button>
  );
}