import './App.css';
import FailureToast from './components/Toast/FailureToast';
import SuccessToast from './components/Toast/SuccessToast';
import HomeIndex from './pages/homeIndex';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css'
import { useSelector } from 'react-redux';



function App() {
    const ToastDetails = useSelector((state) => state.ToastDetails);
    return (
        <div className='App'>
         
               {ToastDetails.isShowSuccess&&<SuccessToast Message={ToastDetails.ToastMessage}/>}
      {ToastDetails.isShowFailure&&<FailureToast Message={ToastDetails.ToastMessage}/>}
            <HomeIndex />
        </div>
    );
}

export default App;