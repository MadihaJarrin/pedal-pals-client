import { Navigation } from '@mui/icons-material';
import { TextField } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';
import Footer from '../../../Footer/Footer';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    // const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        // console.log(user);
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                // 'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('');
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <Navigation></Navigation>
            <div>
                <h2>Make an Admin</h2>
                <form onSubmit={handleAdminSubmit}>
                    <TextField
                        sx={{ width: '50%' }}
                        label="Email"
                        type="email"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <Button className="btn btn-success" type="submit" variant="contained">Make Admin</Button>
                </form>
                {success && <Alert severity="success">Made Admin successfully!</Alert>}
            </div><br />
            <Footer></Footer>
        </div>
    );
};

export default MakeAdmin;