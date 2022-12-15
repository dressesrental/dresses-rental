import { useAppDispatch } from "@app/hooks";
import { Box, Button, FilledInput, FormControl, InputLabel, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { addUserServ } from "../../../service/users.service";
import { IAdress, IUserDetails } from "types/types";

export const AddUser = () => {
    // const classes = useStyles();
    const dispatch = useAppDispatch();
    const [adress, setAdress] = useState<IAdress>({
        city: '',
        street: '',
        number: 0
    });
    const [newUser, setNewUser] = useState<IUserDetails>({
        name: '',
        phoneNumber1: '',
        phoneNumber2: '',
        email: '',
        adress: adress
    });
    useEffect(() => {
        setNewUser({ ...newUser, adress: { ...adress } })
    }, [adress])
    const submit = () => {
        dispatch(addUserServ(newUser));
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


