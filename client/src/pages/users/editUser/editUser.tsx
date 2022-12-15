import { Box, Button, FilledInput, FormControl, InputLabel, TextField, ThemeProvider } from '@mui/material';
import { useEffect, useState } from "react";
import { IAdress, IUserDetails } from "types/types";
import { useDispatch, useSelector } from "react-redux";
import { addUserServ } from "../../../service/users.service";
import { useAppDispatch } from "@app/hooks";
import { RootState } from 'redux/store';
import { editUSerApi } from '../../../api/usres.api';
import { setCurrentUser } from '../../../redux/users/users.slice';


export const EditUser = () => {

    const dispatch = useAppDispatch();

    const currentUser = useSelector((state: RootState) => {
        return state.usersReducer.currentUser
    })
    const [adress, setAdress] = useState<IAdress>({
        city: '',
        street: '',
        number: 0
    });
    const [newUser, setNewUser] = useState<IUserDetails>(currentUser);
    useEffect(() => {
        setNewUser({ ...newUser, adress: { ...adress } })
    }, [adress])
    const submit = async () => {
        const user: IUserDetails | any = await editUSerApi(newUser);
        dispatch(setCurrentUser(user));
    }

    return (
        <>
            <Box>
                <FormControl variant="filled" >
                    <InputLabel htmlFor="name" >שם</InputLabel>
                    <FilledInput id="name" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
                </FormControl>
                <FormControl variant="filled">
                    <InputLabel htmlFor="phone1">טלפון</InputLabel>
                    <FilledInput id="phone1" value={newUser.phoneNumber1} onChange={(e) => setNewUser({ ...newUser, phoneNumber1: e.target.value })} />
                </FormControl>
                <FormControl variant="filled">
                    <InputLabel htmlFor="phone2">טלפון נוסף</InputLabel>
                    <FilledInput id="phone2" value={newUser.phoneNumber2} onChange={(e) => setNewUser({ ...newUser, phoneNumber2: e.target.value })} />
                </FormControl>
                <FormControl variant="filled">
                    <InputLabel htmlFor="email">כתובת מייל</InputLabel>
                    <FilledInput id="email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                </FormControl>
                <FormControl variant="filled">
                    <InputLabel htmlFor="city">עיר</InputLabel>
                    <FilledInput id="city" value={adress.city} onChange={(e) => setAdress({ ...adress, city: e.target.value })} />
                </FormControl>
                <FormControl variant="filled">
                    <InputLabel htmlFor="street">רחוב</InputLabel>
                    <FilledInput id="street" value={adress.street} onChange={(e) => setAdress({ ...adress, street: e.target.value })} />
                </FormControl>
                <FormControl variant="filled">
                    <InputLabel htmlFor="street-num">מספר רחוב</InputLabel>
                    <FilledInput id="street-num" value={adress.number} onChange={(e) => setAdress({ ...adress, number: e.target.value as unknown as number })} />
                </FormControl>
                <TextField label="Name" variant="standard" />
                <Button variant="outlined" onClick={() => { submit() }}>שמירה</Button>
            </Box>
        </>
    )
}