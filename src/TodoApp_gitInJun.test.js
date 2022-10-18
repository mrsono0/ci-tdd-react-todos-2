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
    it('creates new todo', () => {
        const { getByPlaceholderText, getByText } = render(<TodoApp_gitInJun />);
        fireEvent.change(getByPlaceholderText('할 일을 입력하세요'),
        { target: { value: "새 항목 추가하기" } }
        );
        fireEvent.click(getByText('등록'));
        getByText('새 항목 추가하기');
    });
    it('toggles todo', () => {
        const { getByText } = render(<TodoApp_gitInJun />);
        const todoText = getByText('TDD 배우기');
        expect(todoText).not.toHaveStyle('text-decoration: line-through');
        fireEvent.click(todoText);
        expect(todoText).toHaveStyle('text-decoration: line-through');
    });
});
