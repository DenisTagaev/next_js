export default function getFormattedDate(dateStr: string): string {
    return new Intl.DateTimeFormat('en-CA', { dateStyle: 'long'})
        .format(new Date(dateStr))
}