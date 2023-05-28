import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { createUserSuccess } from '../../service/slice/authSlice';
import styled from 'styled-components';
import Modal from "../Modal/Modal";
import InterestsPage from "../InterestsPage/InterestsPage";
import {HeaderItem} from "../Header/Header";
import LoginModal from "../Login/Login";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const DiscoverPage: React.FC = ()  => {
    const [isOpenedModal, setModalState] = useState(true);
    const dispatch = useDispatch();

    const handleModalState = () => {
        setModalState(!isOpenedModal);
    };

        async function onSubmit(formData: FormData) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            };

            const response = await fetch('https://cors-anywhere.herokuapp.com/http://46.243.143.123:8010/user', requestOptions);

            const data = await response.json();

            dispatch(createUserSuccess(data.user_id));
        }



    return (
        <Container>
           <HeaderItem/>
            <h1 style={{
                margin: `0 auto`,
                height: `92px`,
                width: `1288px`,
                background: `url("../../images/shade.png")`,
                border: `1px solid #EFF7FB`,
                borderRadius: `12px`,
                alignItems: `center`,
                display: `flex`,
                justifyContent: `center`
            }}>Выбирайте заинтересовавшие вас активности</h1>
            <p style={{
            margin: `0 auto`,
                padding: `15px 0`
            }}>Это позволит нам лучше узнать о ваших предпочтениях</p>
            <InterestsPage onSubmit={onSubmit}/>
            <Modal activeModal={isOpenedModal} closeModal={handleModalState}>
                <LoginModal/>
            </Modal>
        </Container>
    );
};

export default DiscoverPage;