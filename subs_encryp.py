import string
pt = input("Enter the Plain Text: ").lower()  # akash is the king of the cosmos
key = input("Enter the Key: ").lower()  # listen to atif
print(len(key))
cipTxt = ""
for ch in pt:
    if ch in string.ascii_lowercase:
        index = ord(ch) - ord('a')
        cipTxt = cipTxt + key[index]
    else:
        cipTxt = cipTxt+ch

print("plain Text :"+pt)
print("cipher Text:"+cipTxt)
