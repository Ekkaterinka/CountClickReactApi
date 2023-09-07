
import Typography from '@mui/material/Typography';
import { useCountClick } from './useCountClick';

export default function GetCount({count}: {count:number}) {
    const { item, isLoading } = useCountClick(count);

    return (
        <>
            {isLoading && <Typography variant="body2">Loading...</Typography>}
            {item.error_ui ?
                <Typography variant="body2">"Ошибочка вышла!"</Typography>
                :
                <Typography variant="body2">По версии сервера: {item.count} раз</Typography >}
        </>

    );
};