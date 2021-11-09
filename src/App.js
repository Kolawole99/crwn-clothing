import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import Header from './components/header/header.component';
import UserAuthentication from './pages/user-authentication/user-authentication.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: { ...snapShot.data(), id: snapShot.id },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<UserAuthentication />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>404. There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
    );
  }
}

export default App;
