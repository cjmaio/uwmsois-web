from credittrack.entities.account import Account


class LineOfCredit(Account):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
