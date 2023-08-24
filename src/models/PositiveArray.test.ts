import { beforeEach, describe, it} from "node:test";
import { expect, test } from "@jest/globals";
import { PositiveArray } from "./PositiveArray";

let array = new PositiveArray

describe("Tests over an array", () => {


    beforeEach(() => {
        array = new PositiveArray
    })

    test("should return a positive array", () => {
        array.add(10);
        let index = array.values[0]
        expect(index).toBe(10);
    })

    test("it should return an array with 2 index", () => {
        array.add(2);
        array.add(4);
        array.remove(1);
        expect(array.length).toBe(2)
    })

    test("it shoud return the same array", () => {
        array.add(10);
        array.remove(10);
        array.remove(-1)
        expect(array.length).toBe(3)
    })



})