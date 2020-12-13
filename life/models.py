from django.db import models
import numpy as np
import json

def seed_random_world():
    # arr = np.random.randint(2, size=(2500,))
    arr = np.zeros(2500, dtype=int)
    arr[0] = 1
    l = arr.tolist()
    return json.dumps(l)
    
    

class World(models.Model):
    preset = models.JSONField(default=seed_random_world)

