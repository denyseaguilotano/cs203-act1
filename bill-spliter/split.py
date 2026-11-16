

def split_bill(bill, tip_percent, people):

    if people < 1:
        print("error: need at least 1 person")
        return

    tip = bill * (tip_percent / 100)
    total = bill + tip
    each = total / people

    print(f"tip: {tip:.2f}")
    print(f"total: {total:.2f}")
    print(f"each: {each:.2f}")


for p in range(1,6):
    print("--- people:", p)
    split_bill(1250, 10, p)
    
split_bill(1250, 10, 0)