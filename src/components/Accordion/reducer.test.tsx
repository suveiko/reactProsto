import {reducer, StateType, TOGGLE_CONSTANT} from "./reducer";

test('collapsed should be true', () => {

    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: TOGGLE_CONSTANT})

    //expected
    expect(newState.collapsed).toBe(true)

})

test('collapsed should be false', () => {

    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(state, {type: TOGGLE_CONSTANT})

    //expected
    expect(newState.collapsed).toBe(false)

})

test('reducer should be wrong', () => {

    //data
    const state: StateType = {
        collapsed: true
    }

    //expected
    expect(() => {
        reducer(state, {type: 'FAKE-TYPE'})
    }).toThrowError()

})