import COLORS from "./colors"

export default {
    NOT_STARTED: {
        key: "NOT_STARTED",
        label: "Not Started",
        primaryColor: COLORS.red,
        secondaryColor: COLORS.lightred
    },
    IN_PROGRESS: {
        key: "IN_PROGRESS",
        label: "In Progress",
        primaryColor: COLORS.green,
        secondaryColor: COLORS.lightgreen
    },
    COMPLETED: {
        key: "COMPLETED",
        label: "Completed",
        primaryColor: COLORS.blue,
        secondaryColor: COLORS.lightblue
    },
}