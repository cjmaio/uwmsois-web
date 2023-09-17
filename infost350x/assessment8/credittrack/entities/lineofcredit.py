from credittrack.entities.account import Account


class LineOfCredit(Account):
    def __init__(
        self,
        **kwargs  # This is a catch all to pass the arugments through to the subclass
    ):
        super().__init__(**kwargs)
