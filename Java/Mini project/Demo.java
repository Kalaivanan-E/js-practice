
class Main{
    public static void main(String[] args) {
        ATMOperationimpl atmoperation = new ATMOperationimpl();
        atmoperation.viewBalance();
        atmoperation.depositAmount(500);
        atmoperation.viewBalance();
        atmoperation.depositAmount(1000);
        atmoperation.viewBalance();
        atmoperation.withdrawAmount(500);
        atmoperation.viewBalance();
    }
}