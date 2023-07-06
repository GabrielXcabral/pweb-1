export abstract class IMensagem{
    abstract warningAlert(textLine: string, isShowCancel?: boolean): void

    abstract successAlert(textLine: string): void
}