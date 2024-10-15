export default function getDateDifference(from, to) {
    return ((new Date(to).getTime() - new Date(from).getTime()) / (24 * 60 * 60 * 1000)) + 1;
}