import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Container from 'react-bootstrap/Container'

import NotFound from './pages/NotFound' 
import EditTransaction from './pages/EditTransaction' 
import ListUserPolicy from './pages/ListUserPolicy' 
import Home from './pages/Home'

export default function BasicExample() {
	const isAuthenticated = window.localStorage.getItem('token')
	return (
		<div style={{height: '100vh'}}>
			<div style={{display:'table', height:'100%', width: '100%', backgroundColor: '#6f6f6f3b'}}>
			<Container style={{display: 'table-cell', verticalAlign: 'middle', textAlign:'center'}}>
				<Router>
					<Routes>
						<Route path="/edit-userpolicy/:id" element={<EditTransaction />} /> 
						<Route path="/list-policy" element={<ListUserPolicy />} /> 
						<Route path="/" element={<Home />} /> 
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Router>
			</Container>
			</div>
		</div>
	);
}
