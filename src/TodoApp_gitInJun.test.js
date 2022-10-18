import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoApp_gitInJun from './TodoApp_gitInJun';

describe('<TodoApp_gitInJun />', () => {
    it('renders TodoFrom TodoList', () => {
        const { getByText, getByTestId } = render(<TodoApp_gitInJun />);
        getByText('등록'); // TodoForm 화면에 있는지 확인
        getByTestId('TodoList'); // TodoList 화면에 있는지 확인
    });
    it('renders two default todos', () => {
        const { getByText } = render(<TodoApp_gitInJun />);
        getByText('TDD 배우기');
        getByText('react-testing-library');
    });
});
