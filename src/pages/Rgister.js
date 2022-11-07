import {useState, useEffect} from 'react'
import Wrapper from '../assets/wrappers/RegisterPage';
import {Logo} from '../components';
import FormRow from '../components/FormRow';
import {toast} from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember:true,
};

const Rgister = () => {
  const [values, setValues] = useState(initialState);
  const {user, isLoading} = useSelector(store => store.user);
  const dispatch = useDispatch();


  const handleChange = (e)=> {
    const name = e.target.name;
    const value = e.target.value;
    setValues({...values, [name]: value});
  }

  const onSubmit = (e)=> {
    e.preventDefault();
    const {name, email, password, isMember} = values;

    if(!email || !password || (!isMember && !name)) {
      toast.error('please fill out all fields');
    }
    if(isMember) {
      dispatch(loginUser({email:email, password:password}));
    } else {
      dispatch(registerUser({name, email, password}));
    }
  }

  const toggleMember = ()=> {
      setValues({...values, isMember: !values.isMember});
  };

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {/* name field */}
        {!values.isMember && (
          <FormRow type='text' name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email field */}
        <FormRow type='email'
         name='email'
         value={values.email}
         handleChange={handleChange}
        />
        {/* password field */}
        <FormRow type='password'
         name='password'
         value={values.password}
         handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block'
        disabled={isLoading}
        >
          {isLoading ? 'loading ...': 'Submit'}
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' 
            className='member-btn'
            onClick={toggleMember}>
            {values.isMember ? 'Register': 'login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Rgister