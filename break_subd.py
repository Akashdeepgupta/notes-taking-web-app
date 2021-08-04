ciptxt = "tcrlq ckg ikrabhcgcq cpi cwiqlji"
ciptxt = ciptxt.lower()
# print(ciptxt)
stored_letters = {}
for char in ciptxt:
    if char not in stored_letters:
        stored_letters[char] = 1
    else:
        stored_letters[char] += 1

print(stored_letters)
attempt = ciptxt.replace("c", "\033[31ma\033[0m")
print("Replacing c with a")
attempt = attempt.replace("r", "\033[31mc\033[0m")
print("Replacing r with c")
attempt = attempt.replace("l", "\033[31mo\033[0m")
print("Replacing l with o")
attempt = attempt.replace("q", "\033[31ms\033[0m")
print("Replacing q with s")
attempt = attempt.replace("k", "\033[31mn\033[0m")
print("Replacing k with n")
attempt = attempt.replace("g", "\033[31md\033[0m")
print("Replacing g with d")
attempt = attempt.replace("i", "\033[31me\033[0m")
print("Replacing i with e")
attempt = attempt.replace("p", "\033[31mr\033[0m")
print("Replacing p with r")
attempt = attempt.replace("b", "\033[31mi\033[0m")
print("Replacing b with i")
attempt = attempt.replace("h", "\033[31ml\033[0m")
print("Replacing h with l")
attempt = attempt.replace("j", "\033[31mm\033[0m")
print("Replacing j with m")
print(attempt)
