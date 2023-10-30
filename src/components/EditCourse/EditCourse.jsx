import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Button from '../../common/Button/Button';

import { useDispatch, useSelector } from 'react-redux';

import { updateCourseAction } from '../../store/courses/actions';

import './editCourse.css';

function EditCourse() {
	const params = useParams();
	const [Title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [dur, setDur] = useState(0);

	const token = useSelector((state) => state.user.token);

	const navigate = useNavigate();

	const dispatch = useDispatch();
	useEffect(() => {
		async function getOne() {
			await fetch('http://localhost:4000/courses/' + params.courseId).then(
				async (res) => {
					const result = await res.json();
					setTitle(result.result.title);
					setDesc(result.result.description);
					setDur(result.result.duration);
				}
			);
		}
		getOne();
	}, [params]);

	function handleTitle(event) {
		setTitle(event.target.value);
	}
	function handleDesc(event) {
		setDesc(event.target.value);
	}
	function handleDur(event) {
		setDur(event.target.value);
	}
	function updateCourse() {
		let aux = {
			body: { title: Title, description: desc, duration: parseInt(dur) },
			id: params.courseId,
			auth: token,
			/* "authors": [
        "string"
      ] */
		};
		dispatch(updateCourseAction(aux));
		navigate('/courses');
	}
	return (
		<div className='form'>
			<p>TItle</p>
			<input type='text' value={Title} onChange={handleTitle} />
			<p>Description</p>
			<textarea
				name=''
				value={desc}
				id=''
				cols='30'
				rows='10'
				onChange={handleDesc}
			></textarea>
			<p>Duration</p>
			<input type='number' value={dur} onChange={handleDur} />
			<Button
				type={true}
				buttonText='Update'
				clicHandle={updateCourse}
			></Button>
		</div>
	);
}

export default EditCourse;
