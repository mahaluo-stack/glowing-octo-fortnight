export type FoodDataType = {
    name: string;
    nutrition: { [key: string]: { value: number, unit: string } }
}