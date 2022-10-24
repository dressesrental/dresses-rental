import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { IOrderDetails, ISetDresses } from "../../types/types";
import { AddSet } from "./addSet/addDress/AddSet";

export const AddOrder = () => {
    const [order, setOrder] = useState<IOrderDetails>(
        {
            customerName: "",
            orderDate: new Date(Date.now()),
            eventDate: new Date(Date.now()),
            amountPaid: 0,
            idEmployeeMadeOrder: 0,
            comments: []
        }
    );
    const [addSet,setAddSet]= useState(false);
    const [dresses, setDresses] = useState<ISetDresses>();

    const handleSubmit = () => {

    }
    const addASet = () => {
        setAddSet(true);
    }
    return (
        <>
            <p>AddOrder</p>
            <Box component="form" onSubmit={handleSubmit} noValidate >
                <TextField
                    type="text"
                    onChange={(e) => setOrder({ ...order, customerName: e.target.value })}
                />
                <TextField
                    type="date"
                    onChange={(e) => setOrder({ ...order, eventDate: e.target.value as unknown as Date })}
                />
                <Button onClick={addASet}>הוספת סט</Button>
                {addSet && <AddSet></AddSet>}

                <Button
                    type="submit"
                >
                    sava order
                </Button>
            </Box>

            {/* <input type="text">הכנס קוד לקוח:</input>
         <input >הכנס תאריך ארוע:</input> */}
        </>
    )
}