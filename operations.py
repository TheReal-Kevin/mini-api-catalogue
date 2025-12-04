def addition(a, b):
    """Retourne la somme de deux nombres."""
    return a + b


def maximum(a, b):
    """Retourne le plus grand des deux nombres."""
    return a if a > b else b


def format_nom(nom):
    """Formate un nom : première lettre en majuscule, reste en minuscules."""
    if not nom:
        return ""
    return nom[0].upper() + nom[1:].lower()
