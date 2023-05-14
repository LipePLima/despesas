export interface ApiResponse {
     day: string;
     amount: number;
     height: number;
     costs: Costs[]
}

interface Costs {
     value: string;
     description: string;
     timetable: string
}

