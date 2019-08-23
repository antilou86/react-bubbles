import axios from 'axios';

export const axiosWithAuth =() => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            'Authorization': `${token}`,
        },
    });
};

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route 
    {...rest} 
    render ={
        props => localStorage.getItem('token') ? 
            (<Component {...props}/>
                ) : (<Redirect to='/'/>)
            }
     />
)